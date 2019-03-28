基础优化

    1. HTML(template)

        1.1 指令v-if和v-show的使用

            v-if会在DOM层面上操作  

            V-show会在dispaly上操作

            区分:

            权限展示使用，使用v-if

            没有权限要求，频繁切换使用使用
            V-show，不频繁使用v-if

        1.2 使用v-for指令时，为item使用:key="hashkey",提高diff算法效率


        