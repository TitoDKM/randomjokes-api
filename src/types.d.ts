export interface Joke {
    id: number,
    type: string,
    setup: string,
    punchline: string,
    like: number,
    dislike: number
}

export interface Vote {
    joke_id: number,
    type: string
}