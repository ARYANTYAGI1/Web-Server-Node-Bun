import {serve} from 'bun';

serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === '/'){
            return new Response("Hello From Bun Server", {status:200})
        } else
        return new Response("Page Not Found", {status:404})
    },
    port:3001
})