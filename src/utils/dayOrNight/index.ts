export const dayOrNight = ()=>{
    const date = new Date();
    const hr = date.getHours();

    if(hr >= 7 && hr <= 17){
        return 'morning'
    }
    return 'night'
    
}