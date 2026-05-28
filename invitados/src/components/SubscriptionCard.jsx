export const SubscriptionCard =  ({planName,price,isPremium}) => {
    

    
    return (<>
    <h2>{planName}</h2>
    <p>{price}</p>

    {isPremium&& <h2>¡ERES PREMIUM!</h2>}
    
    </>);
}