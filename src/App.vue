<template>
    <div id="app">
        <Header v-if = 'headerStatus'/>     
        <div class = 'mainContent'> 
            <Main @hideHeader = '_hideHeader(false)'> </Main>
        </div> 
        <Footer />
    </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "App",
    components: {
        Header,
        Footer,
        Main
    },
    data() {
        return {
            headerStatus: true
        }
    },
    methods: {
        _hideHeader(data) {
            this.headerStatus = data;
        }
    }
};
</script>

<style>
#app {
    width: 100%; 
    font-family: "Roboto Slab", Georgia, "Times New Roman";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 30px;
}
.mainContent {
     width: 100%; 
}   
</style>
