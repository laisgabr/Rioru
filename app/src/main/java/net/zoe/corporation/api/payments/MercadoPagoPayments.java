package net.zoe.corporation.api.payments;

import com.mercadopago.*;
import com.mercadopago.exceptions.MPConfException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.Payment;

public class MercadoPagoPayments {
    public MercadoPagoPayments(String MPAPIToken) throws MPConfException, MPException {
        MercadoPago.SDK.setAccessToken("TEST-1399647498491454-010718-3e0d68e33315c82a600d1ff13f9c576a-691123402");
        Payment pagamento = new Payment();
        pagamento.setDescription("ZOE-MP_" + pagamento.getId() + "  Doação para Zoe Corporation");
        System.out.println(MercadoPago.SDK.getClientName());
    }
}
