module.exports = {
    // base: '/vuepresstest-two/', 
    title: 'Package Documentation',
    themeConfig: {
        smoothScroll: true,
        nav: [
            {text: 'Documentation', link: '/'},
            {text: 'Github', link: '/repo'},
            {text: 'ArielMejiaDev', link: 'http://arielmejia.dev'},
        ],
        sidebar: [
            '/',
            '/installation',
            '/configuration',
            '/packageViews',
            '/packageMigrations',
            '/simpleExample',
            '/advanceExample',
            '/methodList'
        ]
    }
};