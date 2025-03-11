import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Steps() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Step 1: Login to the DPP portal</h3>
        <p className="text-muted-foreground">If you do not have a login to our sandbox portal, please contact your account representative.</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Step 2: Navigate to the webhook packages page</h3>
        <p className="text-muted-foreground">
          The webhook packages page will be under Settings ➞ My Profile ➞ Webhook Packages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Step 3: Determine your desired webhooks</h3>
        <p className="text-muted-foreground">
          Select the desired event type(s) for the scope of your integration.
        </p>
        <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-base">Webhook Events</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Merchant Boarded: Contains relevant information for new merchant, triggered when merchant is boarded into DPP.</li>
                <li>Merchant Updated: Contains information regarding change(s) to a merchant account, triggered when change is made in DPP.</li>
                <li>CC Batch: Summary of credit card batch, triggered at batch close.</li>
                <li>ACH Batch: Summary of ACH batch, triggered at batch close.</li>
                <li>ACH Reject: ACH transaction reject notification, triggered when reject is received.</li>
                <li>Transaction: Transaction webhook with full details, triggered when transaction is processed.</li>
                <li>Vault: Contains information related to a customer vault record, triggered when vault is created or updated</li>
                <li>CC Chargeback: Contains information regarding credit card chargeback, triggered when chargeback is received.</li>
              </ul>
            </CardContent>
          </Card>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Step 4: Enter your endpoint URL</h3>
        <p className="text-muted-foreground">
          Add your endpoint URL to any events you would like to receive webhooks for. All events are forwarded to this URL as a POST
          request. In case of an event, your webhook initiates an HTTP callback to this endpoint that you must configure
          to receive data.
        </p>

      </div>
    </div>
  )
}

