/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { array, object, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import HelloWorld from "./HelloWorld.vue";

import HelloWorldRm from "./HelloWorldRm.md";

storiesOf("HelloWorld", module)
    .add("default", () => {
        return {
            components: { HelloWorld },
            props: {
                msg: {
                    default: text('msg', 'test')
                },
            },
            methods: {
            },
            template:
                `<HelloWorld :msg="msg"/>`,
        }
    },
        {
            readme: {
                sidebar: HelloWorldRm,
            },
        })