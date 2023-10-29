const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments'

interface IComments {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

const getData = async <T extends string, K extends IComments>(url: T): Promise<K[]> => {
    // Your code here...
    const data: Response = await fetch(url)
    const comments: K[] = await data.json()
    return comments
}

getData(COMMENTS_URL).then((data) => {
    // Your code here...
    data.map((comment) => {
        console.log(`ID: ${comment.id}, Email: ${comment.email}`)
    })
})

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
