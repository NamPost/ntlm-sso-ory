"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchange_code_for_token_response = exports.login_response = exports.oauth_challenge_response = exports.ntlm_type_3_header = exports.ntlm_type_2_header = exports.ntlm_type_1_header = void 0;
exports.ntlm_type_1_header = "NTLM TlRMTVNTUAABAAAAB7IIogcABwA1AAAADQANACgAAAAKADk4AAAAD0FQUC0xMC1QU1AtMDFOQU1QT1NU";
exports.ntlm_type_2_header = "NTLM TlRMTVNTUAACAAAAAAAAADgAAABVgphi4LSpuOdYihQAAAAAAAAAAKIAogA4AAAABQEoCgAAAA8CAA4AUgBFAFUAVABFAFIAUwABABwAVQBLAEIAUAAtAEMAQgBUAFIATQBGAEU\nAMAA2AAQAFgBSAGUAdQB0AGUAcgBzAC4AbgBlAHQAAwA0AHUAawBiAHAALQBjAGIAdAByAG0AZgBlADAANgAuAFIAZQB1AHQAZQByAHMALgBuAGUAdAAFABYAUgBlAHUAdABlAHIAcwA\nuAG4AZQB0AAAAAAA=";
exports.ntlm_type_3_header = "NTLM TlRMTVNTUAADAAAAGAAYAJAAAABEAUQBqAAAAA4ADgBYAAAAEAAQAGYAAAAaABoAdgAAAAAAAADsAQAABYKIIgoAOTgAAAAP62XBMuNVM4Foq1osnWwJak4AQQ\nBNAFAATwBTAFQAcgBvAGwAYQBuAGQAaQBoAEEAUABQAC0AMQAwAC0AUABTAFAALQAwADEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8FJweT5RggXV8MBKDr61mgEBAAAAAAAAkVk3Hr\ndh2wE5Pgnd9ijsXQAAAAACAA4AUgBFAFUAVABFAFIAUwABABwAVQBLAEIAUAAtAEMAQgBUAFIATQBGAEUAMAA2AAQAFgBSAGUAdQB0AGUAcgBzAC4AbgBlAHQAAwA0AHUAawBiAHAALQ\nBjAGIAdAByAG0AZgBlADAANgAuAFIAZQB1AHQAZQByAHMALgBuAGUAdAAFABYAUgBlAHUAdABlAHIAcwAuAG4AZQB0AAgAMAAwAAAAAAAAAAEAAAAAIAAA4C+iGg4Ma0CZyGhc0VUZkp\nbBISO7AzyaC/BJ+G+NUNAKABAAAAAAAAAAAAAAAAAAAAAAAAkAJgBIAFQAVABQAC8AbABvAGMAYQBsAGgAbwBzAHQAOgAzADAAMAAwAAAAAAAAAAAA";
exports.oauth_challenge_response = {
    challenge: "rzYQf8wi-M5s25zi13iuPZPAHdQHZgvy40FCzJn9VVgesJnTt3kSx2EWSfeHATb2tiusia4JHKYy7DijSI2jclxyB2SG4EXb6s5aIHUFBXNL2SkQangNqjiYynIAEc\n  T9Bv1L6-CyZMToj1n0q5cbtxXA1JN2CbgMEA8h8Ua8YQnxkA10aT9CoPrOgy7XRpDb0JwFToyYgAAfsNc231dEY7TTJZFV9Kf2n3ue63fyGHTKecbBfLfpQLInICZ9yPEWMh5dEWEZpN\n  8-Ir9uEawrtRObYYM1l2EHd-3yzQ-EaYgUJ4JVNL3h_jd_8MeLwktfBFqXT42v5CwPByFVVRPfae43SqsIN4JjufwYwss3nm1T88G7MQkgTHzRwoBbJWiE-0yg-rbbMeKxaJ0WkBr0_u\n  KZcC3tlfcUlZat_rNRkRd12f04lgBmZLoV0fpgNc6sUiwB9BFyTD4gYZsXr4HjN_2Lmcb8kHrLPC7yL1rEiorWnBmCfbSSXuNi61S9D8ldryruaJetfgaWwLlIdxa9M16PHGPjB6nWOv\n  vwqPJwG8NJJDNoZU6umgavX-10a1s9mBOP6Faee9Mk_1tAkrWeu_odk_7ofp2EC-AOuAc3uruO2Enhhi-Kv9K7dd-mglsR73F5l41QIfriU3sN5zkSFWlNWeZdxRJN9PoNvfB0VF_vN4\n  ictAtSoHqW4etMmnL6GsxAtlpWar5xMDQys-omuChV6vtUW90gMTMa3p4ZMgDXiSKoUD5fuXhNTUeppgfCUuZrRYpZCJXaUzD4R6Lh_tnvEOYzjxlZIeXKg_uP5F2iecewoT_ya5lUBD\n  J9HaHrjz5pjhUZxwmyxZAZxIndw4udq0ps2wJRN5D4xpL4FPS5A9798uQwzv1TsU0X2OCPWiTF2XEQQSjy3nJyDN_Vqpjyv2oj4d0UmtorbQ7mwb9vgf66zBpcScDfyFT2N_-yz_0dzj\n  m8oiz9kfpkVhFPBYRA2kv9ZLctJhUg2BBFVeb2wNbBHiEwBFUJDOFe5aieDQ7RLi9lnf1f9YyHVfNEWJH9HdixBYrSA3BF9U_13_oXmNjTKiOC2Nqj4NbbsT2lAEIFjibXdY_My7KSAB\n  ZzvD24-FbLNomD_K13YsEONYmculVzs9bwwgHvx002CvgSV_ACPVx0fOE8D6yFiTZJzWwEtqbzXGmjdnbgEbha57FjU6PK-WSiV9msp2GVEFIywFREttROYcy-Z0lF5_6Zbx3_0uheHa\n  GlbW7c6sVvxyXcRHglQylhzAvF_9bOVaiNBl8bZUp3vMFwM7zlVghmUmZIPu35X6qcNxbLhuUFZDcgxqOtaVK9OH0-OllgekRFMbc8qywgifILKAkraoyr3w6dGPMP2UCQLVRuDxzm4V\n  nQw2iRnBs=",
};
exports.login_response = {
    code: "ory_ac_t0aFy0EksS9RmWVRC3ZV2sgCUohwSqIhMWn54NPV3i8.pPgu3P6axYo1HLhvrtgeJ2gx5Av8480GK45K1AQ0ktI",
};
exports.exchange_code_for_token_response = {
    access_token: "ory_at_7ZwN6FDVHvPufwRtvBQpY70fKJmju_RWffsdk2pjO80.rnJqR1GQanbgpQ4vxQ3Lq4nWsWS1BMQupI9I7MFEa-s",
    expires_in: 3600,
    scope: "",
    token_type: "bearer",
};
