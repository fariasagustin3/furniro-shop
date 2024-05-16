import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import React from 'react'

const PayPalButton = ({ total, handleCreateOrder }) => {
  return (
    <PayPalScriptProvider options={{
      clientId: "Af2FcmFoc7l1gPVbkVsgL5CZ5oBR0LQ4bZ0xnHmpAmDkywa_LgbQhtciCUyUqzMCC6XlTpbR1BLLB7bG",
    }}>
      {total && (

        <PayPalButtons
          createOrder={(data, actions) => {
            return actions?.order?.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: total
                  }
                }
              ]
            }).then((orderId) => orderId)
          }}
          onApprove={() => handleCreateOrder()}
        />
      )}
    </PayPalScriptProvider>
  )
}

export default PayPalButton