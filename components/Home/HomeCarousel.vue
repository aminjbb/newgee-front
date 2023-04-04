<template>
    <div >
        <vueper-slides  :slide-ratio="6 /25" fade :touchable="false">
            <vueper-slide  class="rounded-lg" v-for="(slide, i) in slides" :key="i" :image="slide.image" :title="slide.title"
                :content="slide.content" />
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: { VueperSlides, VueperSlide },

    data() {
        return {
            slides: [
                {
                    image: require('~/assets/img/Newtournamenthasbegun1.png')
                },
                // Other slides.
            ]
        }
    }
}
</script>