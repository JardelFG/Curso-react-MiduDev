
export const getImgUrl = async ({fact}) =>{
    const threeFirstWords = fact.split(' ',3).join(' ')
    const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
    const data = await res.json()
    const { url } = data
    return url

}