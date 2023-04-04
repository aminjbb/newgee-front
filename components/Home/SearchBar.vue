<template>
    <v-autocomplete class="custom-placeholer-color" :loading="loading"  v-model="productSelected" :items="items" placeholder="search a game"
        background-color="#111A17" dense @keyup="searchProduct()" append-icon="" :search-input.sync="search" outlined
        hide-details></v-autocomplete>
</template>
  <script>
  import axios from 'axios'
  export default {
      data: () => ({
          items: [],
          values: '',
          search: '',
          productSelected: null,
          loading: false,
      }),
  
      methods: {
          searchProduct() {
              if (this.search) {
                  this.loading = true;
                  this.items = []
                  axios({
                      method: "get",
                      url: process.env.apiUrl + "product/shop",
                      params: {
                          name: this.search,
                          numbers_in_page: -1,
                      },
                  })
                      .then((response) => {
                          response.data.result.forEach((element) => {
                              var form = {}
                              if (element.name) {
                                  this.items.push({ text: element.name, value: element });
                              }
  
                          });
  
                          this.loading = false;
                      })
                      .catch((err) => {
                          this.loading = false;
                      });
              } else {
                  this.items = [];
              }
          },
      },
  
      watch: {
          productSelected(val) {
              console.log(val);
              this.$router.push("/product/" + val.url);
          },
      }
  }
  </script>
  