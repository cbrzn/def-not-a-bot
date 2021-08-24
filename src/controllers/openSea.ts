import { Request, Response, Router } from "express";
import { seaport, web3 } from "../config/web3";

const router = Router();

const fetchCollection = async (request: Request, response: Response) => {
  try {
    const asset = {
      tokenAddress: "0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d", // CryptoKitties
      tokenId: "5691", // Token ID
    };
    
    const t = await seaport.getAssetBalance({
      accountAddress: web3.eth.defaultAccount!,
      asset,
    });

    console.log({ t });
    response.json({ json: 200 });
  } catch (e) {
    response.json({ status: 500, error: e.message });
  }
};

router.get("/collections", fetchCollection);

export default router;
