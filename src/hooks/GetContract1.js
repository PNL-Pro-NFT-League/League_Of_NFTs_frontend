import { useContract, useSigner } from 'wagmi';
import abi from '../artifacts/contracts/GameItem.sol/GameItem.json'

function GetContract1() {
  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    addressOrName: '0xc2dE420aCdE13A1603161f11828aeDD63e22f4F4',
    contractInterface: abi.abi,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetContract1;