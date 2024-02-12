const fetchData = async()=>{
    const response = await fetch('https://api.walobwa.xyz/store/products')
    const data = await response.json()
    const characters = data.results


}