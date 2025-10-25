import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)

export function anim() {
  const tl = gsap.timeline({delay: 0.5})
  tl.to('header, section', {opacity: 1, duration: 1.25, stagger: 0.75})
}