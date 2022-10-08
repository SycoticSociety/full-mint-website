import {useState } from 'react';
import {ethers, BigNumber } from 'ethers';
import afroPunkNFTOfficial from './AfroPunkNFT.json';

const afroPunkNFTOfficialAddress = "0x2Dbe2B4E6e8A95f35ab8e42Ec5fF6986A16c862E";

const MainMint = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                afroPunkNFTOfficialAddress,
                afroPunkNFTOfficial.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response:' , response);
            } catch (err) {
              console.log("error: ", err) /*2gro99rg*/
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
       
    };

    const handleIncrement = () => {
        if (mintAmount >= 50) return;
        setMintAmount(mintAmount + 1);
};

return (
    <div>
        <h1>AfroCryptoPunks</h1>
        <p>
            Welcome to The Black Wall Street of Web3.
        </p>
        {isConnected ? (
            <div>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <input type="number" value={mintAmount} />
                    <button onClick={handleIncrement}>+</button>
                </div>
                 <button onClick={handleMint}>Mint Now</button>
             </div>
        ) : (
            <p> You must be connected to Mint.</p>
        )}
    </div>
);
};

export default NavBar;