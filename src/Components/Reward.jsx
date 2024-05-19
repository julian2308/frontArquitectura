import '../styles/Reward.css'
const Reward = ({rewardInfo, redeemPoints}) => {

    const redeem = () => {
        redeemPoints(rewardInfo.puntosRequeridos,rewardInfo.id)
    }


    return(
        <div className="reward">
            <p>Nombre: {rewardInfo.nombre}</p>
            <p>Descripcion: {rewardInfo.descripcion}</p>
            <p>Categoria: {rewardInfo.categoria}</p>
            <p>Puntos requeridos: {rewardInfo.puntosRequeridos}</p>
            <div>
              <button className="redeem-button" onClick={redeem}>Canjear</button>
            </div>
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818" alt={rewardInfo.nombre} />

        </div>
    )

}

export default Reward;