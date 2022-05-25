import { useState } from "react";
import { Container, ListArea, List, ListItem } from './style'

export function MovieRow({ title,items }){

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = ()=>{
        let scrollValue = scrollX + Math.round(window.innerWidth /2);

        if(scrollValue > 0){
            scrollValue = 0;
        }

        setScrollX(scrollValue);
    }

     const handleRightArrow = ()=>{
        let scrollValue = scrollX - Math.round(window.innerWidth /2);
        let listWitdh = items.results.length * 200;

        if(window.innerWidth - listWitdh > scrollValue){
            scrollValue = (window.innerWidth - listWitdh) - 60;
        }
        setScrollX(scrollValue);

    }

    return(
        <Container className="contentMovie">
            <h2>{title}</h2>
            <div className="movieArrowLeft" onClick={handleLeftArrow}> - </div>
            <div className="movieArrowRight" onClick={handleRightArrow}> + </div>

            <ListArea>
                <List style={{
                    marginLeft: scrollX, 
                    width:items.results.length * 350 
                }}>

                    {
                    items.results.length > 0 && items.results.map((item,key)=>{
                        return(
                            <ListItem key={key}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </ListItem>
                        )
                    })
                    }
                </List>
                
            </ListArea>

        </Container>

    )
}