<template lang="pug">
    #app
        NuxtPage
</template>

<script>
const el = document.querySelector('html')
el.classList.toggle('is-dark')
</script>

<style lang="sass">
@import 'primeicons/primeicons.css'
@font-face
    font-family: 'Snazzy'
    font-style: normal
    src: url('/font/operator-medium.woff2') format('woff2')

@font-face
    font-family: 'Snazzy'
    font-style: italic
    src: url('/font/operator-medium-italic.woff2') format('woff2')

@font-face
    font-family: 'Daytona'
    font-style: italic
    src: url('/font/DaytonaPro-BoldItalic.woff2') format('woff2')
    
$code-r: #e83243
$code-o: #ffb32c
$code-y: #f3ef79
$code-g: #5af78e
$code-b: #9aedeb
$code-black: #202430
$code-grey: #2b303f
$code-white: #eff0eb

svg
    width: 100%
:root
    --p-mask-background: rgb(12 12 22 / 88%)
body
    font-family: Snazzy
    font-weight: 300
    background: #202430
    background-image: url(/img/egg-shell2.png)
    color: #eff0eb
    margin: 0
a
    text-decoration: none
#app
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    padding-top: 10cqh
    font-size: 1.1rem
    @media (max-width: 880px)
        height: auto
        padding-top: 4cqh
    background: transparent
.freeze
    pointer-events: none !important
* > ::selection
    background: var(--p-gray-500) !important
* > ::-webkit-selection
    background: var(--p-slate-500) !important
* > ::-moz-selection
    background: var(--p-slate-500) !important
@keyframes blink
    0%, 28%, 32%, 60%, 88%
        border-color: var(--p-stone-400)
        border-width: 2px
        color: var(--p-stone-400)
    14%, 46%, 74%, 100%
        border-color: var(--p-green-400)
        border-width: 2px
        color: var(--p-green-400)
</style>
