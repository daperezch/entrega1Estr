class Like {
  id_owner: number;

  public constructor(id: number) {
    this.id_owner = id;
  }
}

class Comment {
  id: number;
  username: string;
  likes?: number;
  content: string;

  public constructor(id: number, content: string, username: string) {
    this.id = id;
    this.content = content;
    this.username = username;
  }
}

class Post {
  id: number;
  id_owner: number;
  username: string;
  likes?: Like[];
  comments?: Comment[];
  content: string;

  public constructor(id: number, id_owner: number, username: string, content: string) {
    this.id = id;
    this.id_owner = id_owner;
    this.content = content;
    this.username = username;
  }

  public newComment(content: string, username: string) {
    if (!this.comments) {
      this.comments = new Array<Comment>();
    }

    const index = this.comments.length

    this.comments.push(new Comment(index, content, username))
  }

  public like(id_owner: number) {
    if (!this.likes) {
      this.likes = new Array<Like>();
    }

    let exit = false;
    this.likes.forEach(element => {
      if (element.id_owner === id_owner) {
        exit = true;
      }
    });

    if (exit) {
      console.log("You have already liked it")
      return
    }

    this.likes.push(new Like(id_owner))
  }

  public getLike() {
    return this.likes?.length
  }

  public getComment() {
    return this.comments?.length
  }

  public show() {

    let amount = 0;
    let content = "";

    this.content.split(" ").forEach(element => {
      if (amount <= 4) {
        content = content + element + " "
        amount += 1
      } else {
        content = content + "\n    " + element + " "
        amount = 0
      }

    })

    const text = `
    Owner:  ${this.username}

    ${content}

    Likes: ${this.getLike()? this.getLike(): 0} Comments: ${this.getComment()? this.getComment(): 0}
    `

    console.log(text)
  }

}

export default Post;
