const assert = require("chai").assert;
const CaptchaJs = require("../index").create("secret");

describe("CaptchaJs generate test", () => {
   let captcha = CaptchaJs.generate();
   it("Captcha generate constructor", () => {
       assert.isNotNull(captcha.url, "Url");
       assert.isNotNull(captcha.code, "Code");
       assert.isNotNull(captcha.hash, "Hash");
   });

   captcha = CaptchaJs.generate("FFFF");
   it("Captcha user payload", () => {
       assert.isNotNull(captcha.url, "Url");
       assert.isNotNull(captcha.code, "Code");
       assert.isNotNull(captcha.hash, "Hash");

       assert.equal(captcha.code, "FFFF", "Equal test");
   });
});

describe("CaptchaJs types test", () => {
   let captcha = CaptchaJs.generate();
   it("Generate types", () => {
      assert.isString(captcha.url, "Url");
      assert.isString(captcha.code, "Code");
      assert.isString(captcha.hash, "Hash");
   });
});