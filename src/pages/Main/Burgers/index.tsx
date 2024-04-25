import { Head } from "../../../components/Head"
import { SnackTtile } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Burgers() {
    const data = [
    {
        id: 1,
        snack: 'burger',
        name: 'Mega',
        description: 'O artesanal tamanho familia recheado com tres carnes suculentas, queijo e bacon',
        image: 'https://i.imgur.com/upjIUnG.jpg',
        price: '25.5'
    },
    {
        id: 2,
        snack: 'burger',
        name: 'Extra Bacon',
        description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne',
        image: 'https://i.imgur.com/B4J04AJ.jpg',
        price: '30.5'
    }
   ]

    return(
    <>
    <Head title='Hambúrgueres' description="Nossos melhores burguers" />
    <SnackTtile>Hambúrgueres</SnackTtile>
    <Snacks snacks={data}></Snacks>
    </>
   )
}