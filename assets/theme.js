import { definePreset } from '@primevue/themes';
import Lara from '@primevue/themes/lara';
import { palette } from '@primevue/themes';
import card from '@primevue/themes/lara/card';
// custom color
// $code-r: #e83243
// $code-o: #ffb32c
// $code-y: #f3ef79
// $code-g: #5af78e
// $code-b: #9aedeb
// $code-black: #202430
// $code-grey: #2b303f
// $code-white: #eff0eb
const codeR = palette('#e83243');
const codeO = palette('#ffb32c');
const codeY = palette('#f3ef79');
const codeG = palette('#5af78e');
const codeB = palette('#9aedeb');
const codeBlack = palette('#202430');
const codeGray = palette('#2b303f');
const codeWhite = palette('#eff0eb');


const CodeColor = definePreset(Lara, {
    primitive: {
        borderRadius: {
            none: '0',
            xs: '2px',
            sm: '3px',
            md: '5px',
            lg: '10px',
            xl: '16px'
        },
        gray: codeG,
        green: codeG,
        lime: codeG,
        red: codeR,
        orange: codeO,
        amber: codeO,
        yellow: codeY,
        teal: codeY,
        cyan: codeB,
        sky: codeB,
        blue: codeB,
        indigo: codeB,
        violet: codeY,
        purple: codeY,
        fuchsia: codeY,
        pink: codeR,
        rose: codeR,
        zinc: codeGray,
        gray: codeGray,
        zinc: codeBlack,
        neutral: codeWhite,
        stone: codeWhite
    },
    semantic: {
        transitionDuration: '0.2s',
        focusRing: {
            width: '0',
            style: 'none',
            color: 'transparent',
            offset: '0'
        },
        disabledOpacity: '0.6',
        iconSize: '1rem',
        anchorGutter: '2px',
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },
        formField: {
            paddingX: '0.75rem',
            paddingY: '0.625rem',
            borderRadius: '{border.radius.md}',
            focusRing: {
                width: '{focus.ring.width}',
                style: '{focus.ring.style}',
                color: '{focus.ring.color}',
                offset: '{focus.ring.offset}',
                shadow: '{focus.ring.shadow}'
            },
            transitionDuration: '{transition.duration}'
        },
        list: {
            padding: '0.5rem 0',
            gap: '0',
            header: {
                padding: '0.625rem 1rem 0 1rem'
            },
            option: {
                padding: '0.625rem 1rem',
                borderRadius: '0'
            },
            optionGroup: {
                padding: '0.625rem 1rem',
                fontWeight: '600'
            }
        },
        content: {
            borderRadius: '{border.radius.md}'
        },
        mask: {
            transitionDuration: '0.15s'
        },
        navigation: {
            list: {
                padding: '0.5rem 0',
                gap: '0'
            },
            item: {
                padding: '0.625rem 1rem',
                borderRadius: '0',
                gap: '0.5rem'
            },
            submenuLabel: {
                padding: '0.625rem 1rem',
                fontWeight: '600'
            },
            submenuIcon: {
                size: '0.875rem'
            }
        },
        overlay: {
            select: {
                borderRadius: '{border.radius.md}',
                shadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
            },
            popover: {
                borderRadius: '{border.radius.md}',
                padding: '1rem',
                shadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            },
            modal: {
                borderRadius: '{border.radius.xl}',
                padding: '1.5rem',
                shadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
            },
            navigation: {
                shadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
            }
        },
        colorScheme: {
            light: {
                surface: {
                    0: '{gray.50}',
                    50: '{gray.50}',
                    100: '{gray.100}',
                    200: '{gray.200}',
                    300: '{gray.300}',
                    400: '{gray.400}',
                    500: '{gray.500}',
                    600: '{gray.600}',
                    700: '{gray.700}',
                    800: '{gray.800}',
                    900: '{gray.900}',
                    950: '{gray.950}'
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '#ffffff',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.700}'
                },
                highlight: {
                    background: '{primary.50}',
                    focusBackground: '{primary.100}',
                    color: '{primary.700}',
                    focusColor: '{primary.800}'
                },
                focusRing: {
                    shadow: '0 0 0 0.2rem {primary.200}'
                },
                mask: {
                    background: 'rgba(0,0,0,0.4)',
                    color: '{surface.200}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.200}',
                    filledBackground: '{surface.50}',
                    filledFocusBackground: '{surface.0}',
                    borderColor: '{surface.300}',
                    hoverBorderColor: '{primary.color}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.400}',
                    color: '{surface.700}',
                    disabledColor: '{surface.500}',
                    placeholderColor: '{surface.500}',
                    floatLabelColor: '{surface.500}',
                    floatLabelFocusColor: '{surface.500}',
                    floatLabelInvalidColor: '{red.400}',
                    iconColor: '{surface.500}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.700}',
                    hoverColor: '{surface.800}',
                    mutedColor: '{surface.500}',
                    hoverMutedColor: '{surface.600}'
                },
                content: {
                    background: '{surface.0}',
                    hoverBackground: '{surface.100}',
                    borderColor: '{surface.200}',
                    color: '{text.color}',
                    hoverColor: '{text.hover.color}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    }
                },
                list: {
                    option: {
                        focusBackground: '{surface.100}',
                        selectedBackground: '{highlight.background}',
                        selectedFocusBackground: '{highlight.focus.background}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        selectedColor: '{highlight.color}',
                        selectedFocusColor: '{highlight.focus.color}',
                        icon: {
                            color: '{surface.400}',
                            focusColor: '{surface.500}'
                        }
                    },
                    optionGroup: {
                        background: 'transparent',
                        color: '{text.color}'
                    }
                },
                navigation: {
                    item: {
                        focusBackground: '{surface.100}',
                        activeBackground: '{surface.100}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        activeColor: '{text.hover.color}',
                        icon: {
                            color: '{surface.400}',
                            focusColor: '{surface.500}',
                            activeColor: '{surface.500}'
                        }
                    },
                    submenuLabel: {
                        background: 'transparent',
                        color: '{text.color}'
                    },
                    submenuIcon: {
                        color: '{surface.400}',
                        focusColor: '{surface.500}',
                        activeColor: '{surface.500}'
                    }
                }
            },
            dark: {
                surface: {
                    0: '{gray.50}',
                    50: '{gray.50}',
                    100: '{gray.100}',
                    200: '{gray.200}',
                    300: '{gray.300}',
                    400: '{gray.400}',
                    500: '{gray.500}',
                    600: '{gray.600}',
                    700: '{gray.700}',
                    800: '{gray.800}',
                    900: '{gray.900}',
                    950: '{gray.950}'
                },
                primary: {
                    color: '{primary.400}',
                    contrastColor: '{surface.900}',
                    hoverColor: '{primary.300}',
                    activeColor: '{primary.200}'
                },
                highlight: {
                    background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
                    focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                },
                focusRing: {
                    shadow: '0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)'
                },
                mask: {
                    background: 'rgba(0,0,0,0.6)',
                    color: '{surface.200}'
                },
                formField: {
                    background: '{surface.950}',
                    disabledBackground: '{surface.700}',
                    filledBackground: '{surface.800}',
                    filledFocusBackground: '{surface.950}',
                    borderColor: '{surface.700}',
                    hoverBorderColor: '{primary.color}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{red.300}',
                    color: '{surface.0}',
                    disabledColor: '{surface.400}',
                    placeholderColor: '{surface.400}',
                    floatLabelColor: '{surface.400}',
                    floatLabelFocusColor: '{surface.400}',
                    floatLabelInvalidColor: '{red.300}',
                    iconColor: '{surface.400}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    mutedColor: '{surface.400}',
                    hoverMutedColor: '{surface.300}'
                },
                content: {
                    background: '{surface.900}',
                    hoverBackground: '{surface.800}',
                    borderColor: '{surface.700}',
                    color: '{text.color}',
                    hoverColor: '{text.hover.color}'
                },
                overlay: {
                    select: {
                        background: '{surface.900}',
                        borderColor: '{surface.700}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.900}',
                        borderColor: '{surface.700}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.900}',
                        borderColor: '{surface.700}',
                        color: '{text.color}'
                    }
                },
                list: {
                    option: {
                        focusBackground: '{surface.800}',
                        selectedBackground: '{highlight.background}',
                        selectedFocusBackground: '{highlight.focus.background}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        selectedColor: '{highlight.color}',
                        selectedFocusColor: '{highlight.focus.color}',
                        icon: {
                            color: '{surface.500}',
                            focusColor: '{surface.400}'
                        }
                    },
                    optionGroup: {
                        background: 'transparent',
                        color: '{text.color}'
                    }
                },
                navigation: {
                    item: {
                        focusBackground: '{surface.800}',
                        activeBackground: '{surface.800}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        activeColor: '{text.hover.color}',
                        icon: {
                            color: '{surface.500}',
                            focusColor: '{surface.400}',
                            activeColor: '{surface.400}'
                        }
                    },
                    submenuLabel: {
                        background: 'transparent',
                        color: '{text.color}'
                    },
                    submenuIcon: {
                        color: '{surface.500}',
                        focusColor: '{surface.400}',
                        activeColor: '{surface.400}'
                    }
                }
            }
        }
    },
    components: {
        card: {
            colorScheme: {
                light: {
                    root: {
                        background: '{gray.500}',
                        color: '{stone.500}'
                    },
                    subtitle: {
                        color: '{stone.700}'
                    }
                },
                dark: {
                    root: {
                        background: '{gray.500}',
                        color: '{stone.500}'
                    },
                    subtitle: {
                        color: '{stone.700}'
                    }
                }
            }
        }
    }
})


export default {
    preset: CodeColor,
    options: {
        cssLayer: true,
        darkModeSelector: '.is-dark'
    }
};