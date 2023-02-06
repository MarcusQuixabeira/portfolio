<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            header: {
                imageUrl: 'https://picsum.photos/320',
                imageAlt: 'Marcus Quixabeira wishing make awesome code',
                name: 'Marcus Vinicius Quixabeira Bezerra dos Santos',
                title: 'Fullstack Software Engineer and Javascript Lover',
                linkedinUrl: 'https://www.linkedin.com/in/marcus-vinicius-q-b-dos-santos-5954bb140/',
                githubUrl: 'https://github.com/MarcusQuixabeira',
                email: 'mquixaba@gmail.com'
            }
        }
    }
})
</script>

<template>
    <header class="header">
        <div class="portrait">
            <img :src="header.imageUrl" :alt="header.imageAlt">
        </div>
        <div class="credentials">
            <div class="name">{{ header.name }}</div>
            <div class="title">{{ header.title }}</div>
            <div class="social-links">
                <a :href="header.linkedinUrl" target="_blank"><nuxt-icon name="mdi_linkedin" /></a>
                <a :href="header.githubUrl" target="_blank"><nuxt-icon name="jam_github" /></a>
                <a :href="`mailto:${header.email}`" target="_blank"><nuxt-icon name="mdi_email" /></a>
            </div>
            <div class="languages">
                <a href="#">PT-BR</a>
                <a href="#">EN-US</a>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background-color: $deep-blue;
    min-height: 400px;
    color: $white;
    display: flex;
    justify-content: center;
    gap: 300px;
    align-items: center;

    .portrait {
        img {
            border: 3px solid $golden;
            border-radius: 4px;
        }
    }

    .credentials {
        display: flex;
        flex-direction: column;
        gap: 31px;
        justify-content: space-around;
        align-items: center;

        .name {
            font-weight: 700px;
            font-size: 36px;
            line-height: 44px;
            max-height: 87px;
            max-width: 507px;
            text-align: center;
        }

        .title {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: $golden;
        }

        .social-links {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            a {
                color: $golden;
                font-size: 30px;
                color: $golden;
                text-decoration: none;
            }
        }

        .languages {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            a {
                padding: 3px 5px;
                border: 1px solid $golden;
                color: $golden;
                font-size: 10px;
                font-weight: 700;
                text-decoration: none;
            }
        }
    }
}
</style>