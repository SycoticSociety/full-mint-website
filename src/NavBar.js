import React from 'react';

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccounts(accounts);
            } catch (error) {
                console.error("Error connecting to MetaMask", error);
                // Optionally, provide user feedback here (e.g., a toast notification)
            }
        } else {
            console.log("Please install MetaMask!");
            // Optionally, provide user feedback here (e.g., an alert or modal suggesting to install MetaMask)
        }
    }

    function disconnectAccount() {
        setAccounts([]);
    }

    return (
        <div>
            {/*Left Side - Social Media Icons */}
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Email</div>

            {/*Right Side - Sections and Connect */}
            <div>About</div>
            <div>Mint</div>
            <div>Coming-Soon</div>

            {/*Connect and Disconnect*/}
            {isConnected ? (
                <div>
                    <p>Connected</p>
                    <button onClick={disconnectAccount}>Disconnect</button>
                </div>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )}
        </div>
    );
};

export default NavBar;
