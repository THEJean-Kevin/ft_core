//
// @Project: FivemTools
// @Author: Samuelds
// @Source: https://github.com/FivemTools/ft_core
//

import {OnClientReady, Ped} from "@fivemtools/ft_core";

OnClientReady(() => {
    const ped = new Ped();
    let player = ped.GetPlayer(-1);
    console.log(player);
});