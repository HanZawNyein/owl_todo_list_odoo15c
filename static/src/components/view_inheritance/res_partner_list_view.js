/** @odoo-module */

import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';
import { ListController } from '@web/views/list/list_controller';
import { useService } from '@web/core/utils/hooks';

class ResPartnerListController extends ListController {
    setup(){
        super.setup()
        console.log("This is res partner controller. ");
        this.action = useService("action");
    }

    openSalesView(){
        console.log("Sale View");
        this.action.doAction({
            type: "ir.actions.act_window",
//            target: "new",
            name: "Customer Sales",
            res_model: "sale.order",
            views: [[false, "tree"],[false, "form"]],
        });
    }
}

export const resPartnerListView = {
    ...listView,
    Controller: ResPartnerListController,
    buttonTemplate: "owl.ResPartnerListView.Buttons",
}

registry.category("views").add("res_partner_list_view", resPartnerListView);
