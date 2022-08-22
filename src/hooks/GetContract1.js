import { useContract, useSigner } from 'wagmi';
import abi from '../artifacts/contracts/GameItem.sol/GameItem.json'

function GetContract1() {
  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    addressOrName: '0xc09FCee7cB05563b76084CDe4839D1A66e6089D4',
    contractInterface: abi.abi,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetContract1;