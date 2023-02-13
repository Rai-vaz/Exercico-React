import {useEffect} from 'react'


const Productlist = ({list, listModifier}) => {
    const modifieldList = listModifier(list)

    useEffect(() => {
        console.log('criou função')
    }, [listModifier])

  return (
    <ul>
        {modifieldList.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
  )
}

export default Productlist