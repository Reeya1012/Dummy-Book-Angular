import { toInteger } from "@ng-bootstrap/ng-bootstrap/util/util"

export class BooksInfo{

    books = [
        {
            id: 1,
            bookName: 'Ages of Living',
            bookInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Facilisis magna etiam tempor orci eu 
            lobortis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Consectetur 
            adipiscing elit duis tristique sollicitudin nibh sit amet. Mollis nunc sed id
            semper risus in hendrerit gravida rutrum. Adipiscing elit pellentesque habitant `,
            bookImg: '../assets/book1.jpg'
        },
        {
            id: 2,
            bookName: 'A place for us',
            bookInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Facilisis magna etiam tempor orci eu 
            lobortis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Consectetur 
            adipiscing elit duis tristique sollicitudin nibh sit amet. Mollis nunc sed id
            semper risus in hendrerit gravida rutrum. Adipiscing elit pellentesque habitant `, 
            bookImg: '../assets/book2.jpg'
        },
        {
            id: 3,
            bookName: 'God of Small Things',
            bookInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Facilisis magna etiam tempor orci eu 
            lobortis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Consectetur 
            adipiscing elit duis tristique sollicitudin nibh sit amet. Mollis nunc sed id
            semper risus in hendrerit gravida rutrum. Adipiscing elit pellentesque habitant `, 
            bookImg: '../assets/book3.jpg'
        },
        {
            id: 4,
            bookName: 'A thousand Splendid Suns',
            bookInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Facilisis magna etiam tempor orci eu 
            lobortis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Consectetur 
            adipiscing elit duis tristique sollicitudin nibh sit amet. Mollis nunc sed id
            semper risus in hendrerit gravida rutrum. Adipiscing elit pellentesque habitant `, 
            bookImg: '../assets/book4.jpg'
        },
        {
            id: 5,
            bookName: 'Lolita',
            bookInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Facilisis magna etiam tempor orci eu 
            lobortis. Ridiculus mus mauris vitae ultricies leo integer malesuada. Consectetur 
            adipiscing elit duis tristique sollicitudin nibh sit amet. Mollis nunc sed id
            semper risus in hendrerit gravida rutrum. Adipiscing elit pellentesque habitant `, 
            bookImg: '../assets/book5.jpg'
        }
    ]

    searchBook(id: number):{ id: number, bookName: string, bookInfo: string, bookImg: string }{
        
        for(var i = 0;i<this.books.length;i++){
            if(this.books[i].id == id)
                return this.books[i]
        }
        return {id:0,bookName:'',bookInfo:'',bookImg:''}
    }

    addBook(name: string, info: string, imglink: string){
        this.books.push({id:this.books.length + 1, bookName: name, bookInfo: info, bookImg: imglink})
    }

    getBooks(){
        return this.books
    }

}