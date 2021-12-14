pragma solidity ^0.8.0;

import './Base64.sol';
import './Strings.sol';

// refer to https://github.com/paulmillr/noble-bls12-381
contract LitVerify {
  using Base64 for string;
  using StringUtils for *;

  address internal constant G1ADD = address(0xf2);
  address internal constant G1MUL = address(0xf1);
  address internal constant G1MULTIEXP = address(0xf0);
  address internal constant G2ADD = address(0xef);
  address internal constant G2MUL = address(0xee);
  address internal constant G2MULTIEXP = address(0xed);
  address internal constant PAIRING = address(0xec);
  address internal constant MAP_FP_TO_G1 = address(0xeb);
  address internal constant MAP_FP2_TO_G2 = address(0xea);

  // constants along with precompiles
  bytes internal constant P =
    '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x1a\x01\x11\xea\x39\x7f\xe6\x9a\x4b\x1b\xa7\xb6\x43\x4b\xac\xd7\x64\x77\x4b\x84\xf3\x85\x12\xbf\x67\x30\xd2\xa0\xf6\xb0\xf6\x24\x1e\xab\xff\xfe\xb1\x53\xff\xff\xb9\xfe\xff\xff\xff\xff\xaa\xab';
  bytes internal constant G1Base =
    '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x17\xf1\xd3\xa7\x31\x97\xd7\x94\x26\x95\x63\x8c\x4f\xa9\xac\x0f\xc3\x68\x8c\x4f\x97\x74\xb9\x05\xa1\x4e\x3a\x3f\x17\x1b\xac\x58\x6c\x55\xe8\x3f\xf9\x7a\x1a\xef\xfb\x3a\xf0\x0a\xdb\x22\xc6\xbb\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x08\xb3\xf4\x81\xe3\xaa\xa0\xf1\xa0\x9e\x30\xed\x74\x1d\x8a\xe4\xfc\xf5\xe0\x95\xd5\xd0\x0a\xf6\x00\xdb\x18\xcb\x2c\x04\xb3\xed\xd0\x3c\xc7\x44\xa2\x88\x8a\xe4\x0c\xaa\x23\x29\x46\xc5\xe7\xe1';

  // won't use it directly, leave it here for debug & verify
  bytes public constant PubKey =
    '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x19\x71\xe8\x35\xa1\xfe\x1a\x4d\x78\xe3\x81\xee\xbb\xe0\xdd\xc8\x4f\xde\x51\x19\x16\x9d\xb8\x16\x90\x0d\xe7\x96\xd1\x01\x87\xf3\xc5\x3d\x65\xc1\x20\x2a\xc0\x83\xd0\x99\xa5\x17\xf3\x4a\x9b\x62\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x03\xc5\x8f\x23\x03\x1b\xce\x4d\x49\xa0\xe7\x74\xc5\x68\x46\x75\xf7\x7d\x81\xa0\x16\x90\x00\xc6\x0c\x5c\x5a\x46\xe9\x68\xd1\xfa\xec\x79\x3e\xfa\xf1\xfa\x6a\xc4\xc4\xe1\x03\x7d\x17\xb4\x30\x77';
  // can be changed into variable if pub key is expected to change in the future
  bytes public constant PubKeyNegate =
    '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x19\x71\xe8\x35\xa1\xfe\x1a\x4d\x78\xe3\x81\xee\xbb\xe0\xdd\xc8\x4f\xde\x51\x19\x16\x9d\xb8\x16\x90\x0d\xe7\x96\xd1\x01\x87\xf3\xc5\x3d\x65\xc1\x20\x2a\xc0\x83\xd0\x99\xa5\x17\xf3\x4a\x9b\x62\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x16\x3b\x82\xc7\x36\x64\x18\x4d\x01\x7a\xc0\x41\x7d\xe3\x66\x61\x6c\xf9\xc9\xe4\xdc\xf5\x11\xf9\x5a\xd4\x78\x5a\x0d\x48\x24\x29\x32\x32\xc1\x03\xbf\x59\x95\x3a\xf5\x1d\xfc\x82\xe8\x4b\x7a\x34';

  // here use pub key as constant
  // _sig required to be provide as a G2 point (i.e. decoded into G2 Point before contract call)
  // _msg is base64url(header) + '.' + base64url(payload)
  function verify(bytes memory _msg, bytes memory _sig)
    public
    view
    returns (bool)
  {
    bool success;

    bytes memory Hm = hash_to_curve(_msg); // expected to be G2 Point

    bytes memory result;
    (success, result) = PAIRING.staticcall(
      abi.encodePacked(PubKeyNegate, Hm, G1Base, _sig)
    );
    require(success, 'Pairing failed');

    return result[31] == '\x01';
  }

  // another verify function accepts for raw input, useful for other contract
  function verify(
    string memory headerJson,
    string memory payloadJson,
    bytes memory signature
  ) public view returns (bool) {
    string memory headerBase64 = headerJson.encode();
    string memory payloadBase64 = payloadJson.encode();
    StringUtils.slice[] memory slices = new StringUtils.slice[](2);
    slices[0] = headerBase64.toSlice();
    slices[1] = payloadBase64.toSlice();
    string memory message = '.'.toSlice().join(slices);

    return verify(bytes(message), signature);
  }

  function hash_to_curve(bytes memory _msg)
    internal
    view
    returns (bytes memory)
  {
    bytes memory u0;
    bytes memory u1;
    (u0, u1) = hash_to_field(_msg);

    bool success;
    bytes memory p0;
    bytes memory p1;
    // map to curve
    (success, p0) = MAP_FP2_TO_G2.staticcall(abi.encodePacked(u0));
    require(success, 'Map u0 to G2 failed');
    (success, p1) = MAP_FP2_TO_G2.staticcall(abi.encodePacked(u1));
    require(success, 'Map u1 to G2 failed');

    bytes memory p;
    // add up them
    (success, p) = G2ADD.staticcall(abi.encodePacked(p0, p1));
    require(success, 'Add up hash failed');

    return p;
  }

  // since count is constant 2, won't make it a parameter
  // output is 2 G2 point
  function hash_to_field(bytes memory _msg)
    internal
    view
    returns (bytes memory, bytes memory)
  {
    bytes memory expanded = expand_message_xmd(_msg);

    bytes memory u00 = new bytes(64);
    bytes memory u01 = new bytes(64);
    bytes memory u10 = new bytes(64);
    bytes memory u11 = new bytes(64);

    assembly {
      mstore(add(u00, 0x20), mload(add(expanded, 0x20)))
      mstore(add(u00, 0x40), mload(add(expanded, 0x40)))
      mstore(add(u01, 0x20), mload(add(expanded, 0x60)))
      mstore(add(u01, 0x40), mload(add(expanded, 0x80)))
      mstore(add(u10, 0x20), mload(add(expanded, 0xa0)))
      mstore(add(u10, 0x40), mload(add(expanded, 0xc0)))
      mstore(add(u11, 0x20), mload(add(expanded, 0xe0)))
      mstore(add(u11, 0x40), mload(add(expanded, 0x100)))
    }

    u00 = callBigModExp(u00, P);
    u01 = callBigModExp(u01, P);
    u10 = callBigModExp(u10, P);
    u11 = callBigModExp(u11, P);

    return (abi.encodePacked(u00, u01), abi.encodePacked(u10, u11));
  }

  bytes internal constant DST_Prime =
    '\x42\x4c\x53\x5f\x53\x49\x47\x5f\x42\x4c\x53\x31\x32\x33\x38\x31\x47\x32\x5f\x58\x4d\x44\x3a\x53\x48\x41\x2d\x32\x35\x36\x5f\x53\x53\x57\x55\x5f\x52\x4f\x5f\x4e\x55\x4c\x5f\x2b';
  bytes internal constant Z_pad =
    '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00';

  // since DST, len_in_bytes is constant, won't make it a parameter
  function expand_message_xmd(bytes memory _msg)
    internal
    pure
    returns (bytes memory)
  {
    bytes32[9] memory b;

    bytes32 b_0 = sha256(
      abi.encodePacked(Z_pad, _msg, '\x01\x00\x00', DST_Prime)
    );
    b[0] = sha256(abi.encodePacked(b_0, '\x01', DST_Prime));
    for (uint8 i = 1; i <= 8; i++) {
      bytes32 xored = b[i - 1];
      assembly {
        xored := xor(b_0, xored)
      }
      b[i] = sha256(abi.encodePacked(xored, i + 1, DST_Prime));
    }
    bytes memory result = abi.encodePacked(
      b[0],
      b[1],
      b[2],
      b[3],
      b[4],
      b[5],
      b[6],
      b[7],
      b[8]
    );

    // simple way to get a slice by writing a new length
    assembly {
      mstore(result, 256)
    }
    return result;
  }

  function callBigModExp(bytes memory base, bytes memory modulus)
    internal
    view
    returns (bytes memory result)
  {
    result = new bytes(64);
    bool success;

    // args: base 0x40, exponent 0x20, modulus 0x40, value ...
    // use BigModExp precompile with exp = 1
    (success, result) = address(0x05).staticcall(
      abi.encodePacked(
        '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x40',
        '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x20',
        '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x40',
        base,
        '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01',
        modulus
      )
    );
    require(success, 'BigModExp failed');
  }
}
