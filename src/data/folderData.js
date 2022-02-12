const explorer = {
    name : 'root',
    isFolder : true,
    items : [
        {
            name : 'public',
            isFolder : true,
            items : [
                {
                    name : 'favicon.ico',
                    isFolder : false
                },
                {
                    name : 'index.html',
                    isFolder : false
                },
                {
                    name : 'logo123.jpg',
                    isFolder : false
                },
                {
                    name : 'logo1234.jpg',
                    isFolder : false
                },
                {
                    name : 'robots.txt',
                    isFolder : false
                }
            ]
        },
        {
            name : 'src',
            isFolder : true,
            items : [
                {
                    name : 'components',
                    isFolder : true,
                    items : [
                        {
                            name : 'Folder.js',
                            isFolder : false
                        },
                    ]
                },
                {
                    name : 'data',
                    isFolder : true,
                    items : [
                        {
                            name : 'folderData.json',
                            isFolder : false
                        },
                    ]
                },
                {
                    name : 'App.css',
                    isFolder : false
                },
                {
                    name : 'App.js',
                    isFolder : false
                },
                {
                    name : 'index.css',
                    isFolder : false
                },
                {
                    name : 'logo.svg',
                    isFolder : false
                },
                {
                    name : 'styles.css',
                    isFolder : false
                }
            ]
        },
        {
            name : '.gitignore',
            isFolder : false
        },
        {
            name : 'package.json',
            isFolder : false
        },
        {
            name : 'README.md',
            isFolder : false
        }
    ]
}

export default explorer;