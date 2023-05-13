<template>
  <div class="edit-message-container">
    <div class="edit-message-header">
      <h1>Edit Message</h1>
      <img :src="require('@/assets/img/exit-button.svg')" alt="exit out of edit message" />
    </div>
    <h2>Content</h2>
    <div class="edit-message-body">
      <div class="header-container">
        <div class="header-title">
          <div class="header-left">
            <img :src="require('@/assets/img/header-icon.svg')" alt="header edit icon" />
            <span>Header</span>
            <img :src="require('@/assets/img/tooltip.svg')" alt="tooltip" />
          </div>
          <div class="header-right">
             <toggle v-model="toggleValue" :toggleOn="true" />
          </div>
        </div>
        <div class="header-inner-body">
          <drop-down v-model="selectedOption" :options="dropdownOptions" />
          <p>Image size recommendation: 800 x 418 pixel.</p>
          <image-upload />
          <tips :tipsHeader="tipsMessageHeaderOne" :tipsBody="tipsMessageBodyOne" v-model="tipValue" /> 
        </div>
      </div>
    </div>
    <div class="body-message-container">
      <div class="body-message-title">
        <img :src="require('@/assets/img/text-icon.svg')" class="icons" alt="capital t and lowercase t icon." />
        <h2>Body message</h2>
        <img :src="require('@/assets/img/tooltip.svg')" class="icons" alt="tooltip." />
        <span class="label">REQUIRED</span>
      </div>
      <img :src="require('@/assets/img/wysiwyg.png')" class="icons" alt="tooltip." />
      <tips :tipsHeader="tipsMessageHeaderTwo" :tipsBody="tipsMessageBodyTwo" v-model="tipValue" />
    </div>
    <div class="edit-message-component">
      <div class="edit-message-title">
        <div class="header-left">
          <img :src="require('@/assets/img/text-icon.svg')" class="icons" alt="capital t and lowercase t icon." />
          <h2>Footer text</h2>
           <img :src="require('@/assets/img/tooltip.svg')" class="icons" alt="tooltip." />
        </div>
        <div class="header-right">
          <toggle v-model="toggleValue" :toggleOn="false" />
        </div>
      </div>
    </div>
    <div class="edit-message-component">
      <div class="edit-message-title">
        <div class="header-left">
          <img :src="require('@/assets/img/button-icon.svg')" class="icons" alt="empty rectangle icon" />
          <h2>Buttons</h2>
           <img :src="require('@/assets/img/tooltip.svg')" class="icons" alt="tooltip." />
        </div>
        <div class="header-right">
          <toggle v-model="toggleValue" :toggleOn="false" />
        </div>
      </div>
    </div>

    <button @click="saveMessage" class="connectly-button">SAVE</button>
    <button class="connectly-button delete">DELETE</button>
  </div>

</template>

<script>
  import Dropdown from '@/components/Dropdown.vue';
  import ImageUpload from '@/components/ImageUpload.vue'
  import Toggle from '@/components/Toggle.vue'
  import Tips from '@/components/Tips.vue'
  

  export default {
    name: 'EditMessage',
    components: {
      'drop-down': Dropdown,
      'image-upload': ImageUpload,
      'toggle': Toggle,
      'tips': Tips
    },
    data() {
      return {
        isDisplayed: true,
        toggleValue: true,
        tipsMessageHeaderOne: 'Image header tips',
        tipsMessageBodyOne: 'Images can enrich the message experience and help maintain engagement. Use eye-catching images that summarize the message (eg discounts, gifts etc.)',
        tipsMessageHeaderTwo: 'What are variables?',
        tipsMessageBodyTwo: 'Variables are dynamic content that help personalize your campaign, for example: customer names or coupon codes.',
        dropdownOptions: ['Image', 'Option 2', 'Option 3'],
      };
    },
    methods: {
      saveMessage() {

        const axios = require('axios');
       
        const templateName = 'TEST'; //campaign name
        const imageLink = '';

        //TO-DO make this dynamic
        const phoneNumber = '+12345678901';
        const languageCode = 'en'; 
        const currencyType = 'USD';

        const WhatsAppMessageEndpoint = `https://graph.facebook.com/v16.0/${phoneNumber}/messages`;
 
        const message = {
          phone: phoneNumber,
          type: 'template',
          template: {
            name: templateName,
            language: {
              code: languageCode
            },
            components: [
              {
                type: 'header',
                parameters: [
                  {
                    type: 'image',
                    'image': {
                      link: imageLink,
                    }
                  }
                ]
              },
              {
                type: 'body',
                parameters: [
                  {
                    type: 'text',
                    text: 'text string',
                  },
                  {
                    type: 'currency',
                    currency: {
                      fallback_value: 'VALUE',
                      code: currencyType,
                      amount_1000: 1000,
                    }
                  },
                  {
                    type: 'date_time',
                    date_time: {
                      fallback_value: "DATE",
                    },
                  },
                ]
              }
            ]
          }
        }

        axios.post(WhatsAppMessageEndpoint, message)
          .then(response => {
            console.log('Message Sent Successfully');
            console.log('SUCCESS:', response.data);
          })
          .catch(error => {
            console.error('ERROR: Failed to send message');
            console.error('ERROR:', error.data);
          });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .edit-message-container {
    max-width: 360px;
    margin-bottom: 20px;

    .edit-message-body {
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 10px;
      padding: 16px 24px;
      text-align: left;
      margin-bottom: 24px;
    }

    .edit-message-header {
      display: flex;
      justify-content: space-between;
    }


    .header-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .header-left {
        display: flex;
        align-items: center;

      }
    }

    .header-inner-body {
      padding-right: 48px;
    }

    h2 {
      text-align: left;
    }

    span {
      font-size: 1.6rem;
      margin: 0px 4px 0px 8px;
      font-weight: 500;

    }

    .body-message-container {
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 10px;
      padding: 16px 24px;
      text-align: left;
      margin-bottom: 24px;

      .body-message-title {
        display: flex;

        h2 {
          padding: 0px 4px;
        }

        .icons {
          position: relative;
          bottom: 7px;
        }

        .label {
          padding: 4px 8px;
          height: 28px;
          background: #F5F5F5;
          border-radius: 4px;
          font-size: 1.2rem;
          height: 16px;
          font-weight: 700;
          letter-spacing: 0.4px;
        }
      }
    }

    .edit-message-component {
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 10px;
      padding: 16px 24px;
      margin-bottom: 24px;

      .edit-message-title {
        display: flex;
        justify-content: space-between;

        .header-left {
          display: flex;
          align-items: center;

          h2 {
            margin: 0px 4px 0px 8px;
          }
        }

        .header-right {
          margin-top: 4px;
        }
      }
    }

    .connectly-button {
      border: 1px solid #007DFF;
      background-color: #007DFF;
      color: white;
      border-radius: 4px;
      width: 100%;
      padding: 6px;
      font-size: 1.4rem;
      cursor: pointer;
      letter-spacing: 0.4px;
      margin-bottom: 12px;
    }

    .connectly-button.delete {
      background-color: white;
      color: #007DFF;
    }
  }
</style>