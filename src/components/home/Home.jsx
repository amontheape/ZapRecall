import logo from '../../assets/img/Logo.png'

export default function Home({setComponent}){

    return (
        <>
            <img src={logo} alt="logo ZapRecall" />
            <input type="text" placeholder="Sua meta de zaps"/>
            <button onClick={() => setComponent('deck01')} > deck 1 </button>
            <button onClick={() => setComponent('deck02')} > deck 2 </button>
        </>
    );
}