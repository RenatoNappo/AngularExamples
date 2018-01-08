import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';

@Component({
    selector: 'Get-Data-PostsComponent',
    templateUrl: './Get-Data-PostsComponent.component.html',
    styleUrls: ['./Get-Data-PostsComponent.component.css']
  })

export class PostsComponent implements OnInit{

    posts: any[];

    constructor(private postservice: PostService){ }

    ngOnInit(){
        this.postservice.getAll()
        .subscribe(posts => this.posts = posts);
    }

    createPost(input: HTMLInputElement)
    {
        let post = {title: input.value};
        this.posts.splice(0, 0, post);

        input.value = '';
        
        this.postservice.create(post)
        .subscribe(
        newPost => {
            post['id'] = newPost.id;
        },
        (error: AppError) => {
            this.posts.splice(0,1);

            if(error instanceof BadInputError)
            {
                //this.form.setErrors(error.originalerror);
                alert('Bad input Error.');
            }
            else throw error;
        });
    }

    updatePost(post)
    {
        this.postservice.update(post)
        .subscribe(updatedPost => console.log(updatedPost));
    }

  
    deletePost(post)
    {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);

        this.postservice.delete(post.id)
        .subscribe(
            null,
            (error: AppError) => {
                this.posts.splice(index, 0, post);

            if(error instanceof NotFoundError)
            {
                alert('The post has already been deleted');
            }
            else throw error;
        })
    }

    /*console.log(response.json());*/
     //this.http.put(this.url, JSON.stringify(post));
}




