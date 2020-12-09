<template>
  <v-app id="app">
    <v-navigation-drawer app>
      <v-list>
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://avatars1.githubusercontent.com/u/10098539?s=460&u=500ba6c81b8dad7fa59e5221ae10df6e77529ccd&v=4">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>選單</v-list-item-title>
            <v-list-item-subtitle>側邊欄</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                按鈕
              </v-card-title>
              <v-btn @click="hey = hey + 1">按鈕</v-btn>
              <v-btn @click="hey = hey + 2">按鈕+2</v-btn>
              <v-btn @click="hey = hey + 3">按鈕+3</v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                卡片
              </v-card-title>
              <v-row class="pa-2">
                <v-col>
                  <v-card>
                    <v-card-title>
                      標題
                    </v-card-title>
                    <v-card-text>
                      這是內文，內文內文
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card>
                    <v-card-title>
                      按鈕計數
                    </v-card-title>
                    <v-card-text>
                      clicked:{{ hey }}
                    </v-card-text>
                    <v-card-actions>
                      <v-row class="pa-2" align="center" justify="end">
                        <v-btn @click="hey = 0">清空</v-btn>
                      </v-row>
                    </v-card-actions>            
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                文字輸入
              </v-card-title>
              <v-card-text>
                <v-text-field solo />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                滑桿
              </v-card-title>
              <v-card-text>
                滑桿: {{ slider1 }}
                <v-slider v-model="slider1" min=0 max=10 />
                滑桿: {{ slider2 }}
                <v-slider v-model="slider2" min=0 max=10 />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    hey: 0,
    items: [
      { title: '選項1', icon: 'mdi-view-dashboard' },
      { title: '選項2', icon: 'mdi-image' },
      { title: '選項3', icon: 'mdi-help-box' },
    ],
    slider1: 0,
    slider2: 0,
  }),
  created() {
    console.log(this.$vuetify)
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
