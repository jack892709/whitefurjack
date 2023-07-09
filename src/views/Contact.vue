<template>
  <div class="page">
    <div class="page-content pt-md-5">
      <div class="info-layout">
        <div class="contact-block">
          <div class="page-header mb-4">
            <h1>Contact</h1>
            <div>
              Please get in touch and say hello, I’d love to hear from you
            </div>
          </div>
          <div class="form-fields">
            <div class="form-item mb-4">
              <input
                type="text"
                v-model="fields.name"
                name="name"
                id="name"
                class="myform-control text-field"
                placeholder="Your Name"
              />
              <div class="error-validation">{{ errorMsg.name }}</div>
            </div>
            <div class="form-item mb-4">
              <input
                type="text"
                v-model="fields.email"
                name="email"
                id="email"
                class="myform-control text-field"
                placeholder="Your E-mail"
              />
              <div class="error-validation">{{ errorMsg.email }}</div>
            </div>
            <div class="form-item mb-4">
              <textarea
                v-model="fields.message"
                name="message"
                id="message"
                cols="30"
                rows="7"
                class="myform-control textarea-field"
                placeholder="Your Message"
                style="margin-top: 0px; margin-bottom: 0px; height: 240px"
              ></textarea>
              <div class="error-validation">{{ errorMsg.message }}</div>
            </div>
          </div>
          <div class="form-action">
            <button class="btn-plain px-3" @click="sendEmail">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding-left: 5px;
  padding-right: 5px;

  min-height: calc(100vh - 200px);
}
.info-layout {
  margin: auto;
}
.myform-control {
  outline: none;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
.form-item {
  &-null {
    background-color: #f9f9f9;
  }
  input {
    border: 0;
    border-bottom-style: solid;
    border-bottom-color: #c5c4c5;
    border-bottom-width: 1px;
    border-radius: 0px;
  }
  textarea {
    border: 0;
    border-style: solid;
    border-color: #c5c4c5;
    border-width: 1px;
    border-radius: 0px;
  }
}
.error-validation {
  margin-top: 4px;
  font-weight: 500;
  font-size: 12px;
}
.btn-plain {
  border: 0;
  border-style: solid;
  border-color: #c5c4c5;
  border-width: 1px;
  border-radius: 0px;
  color: rgb(118, 118, 118);
  background-color: #fff;
  &:hover {
    color: #fff;
    background-color: #c5c4c5;
  }
}

@media screen and (max-width: 767px) {
  .info-layout {
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 32px;
    padding-bottom: 64px;
  }
}

@media screen and (min-width: 768px) {
  .info-layout {
    max-width: 640px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 64px;
    // padding-bottom: 16px;
    padding-bottom: 64px;
  }
}
@media screen and (min-width: 1400px) {
  .info-layout {
    max-width: 960px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 120px;
    // padding-bottom: 24px;
    padding-bottom: 64px;
  }
}
</style>

<script>
import Swal from 'sweetalert2';

// Regular expression Testing
const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

const separateParagraph = (paragraph) => {
  const lines = paragraph.split(/\r\n|\n\r|\n|\r/);
  return lines;
};

const replaceWithLinebreak = (text) => {
  const lines = separateParagraph(text);
  let result = '';
  for (let i = 0; i < lines.length; i += 1) {
    result += `${lines[i]}<br/>`;
  }
  return result;
};

export default {
  name: 'Contact',
  components: {},
  data() {
    return {
      fields: {
        name: '',
        email: '',
        message: '',
      },
      errorMsg: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  computed: {
    isEmailValid() {
      return emailRule.test(this.fields.email);
    },
  },
  methods: {
    clearFields() {
      this.fields.name = '';
      this.fields.email = '';
      this.fields.message = '';
    },
    checkValidation() {
      const isValid = Boolean(this.fields.name)
        && Boolean(this.fields.email)
        && Boolean(this.fields.message);
      if (!this.fields.name) { this.errorMsg.name = 'This field should not be blank.'; } else this.errorMsg.name = '';
      if (!this.fields.email) { this.errorMsg.email = 'This field should not be blank.'; } else if (!this.isEmailValid) { this.errorMsg.email = 'This email address is not valid.'; } else this.errorMsg.email = '';
      if (!this.fields.message) { this.errorMsg.message = 'This field should not be blank.'; } else this.errorMsg.message = '';
      return isValid;
    },
    sendEmail() {
      let body = `${replaceWithLinebreak(this.fields.message)}<br/><br/><br/>`; // %0A is newline
      body += `From：${this.fields.name}<br/>`;
      body += `Email：${this.fields.email}<br/>`;

      if (this.checkValidation()) {
        this.$loadScript('https://smtpjs.com/v3/smtp.js')
          .then(() => {
            // Script is loaded, do something
            window.Email.send({
              SecureToken: 'a01036ae-7728-489d-a0b8-ae9626fceb68',
              To: 'whitefurjack@gmail.com',
              From: this.fields.email,
              Subject:
                "A visitor from Whitefurjack's website has something to say",
              Body: body,
            }).then(() => {
              Swal.fire({
                // position: 'top-end',
                icon: 'success',
                title: 'Message has been sent',
                showConfirmButton: false,
                timer: 1500,
              });
            });
            this.clearFields();
          })
          .catch(() => {
            // Failed to fetch script
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              confirmButtonColor: '#2f2f2f',
            });
          });
      }
    },
  },
};
</script>
