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
                <li>Merchant Boarded</li>
                <li>Merchant Updated</li>
                <li>CC Batch</li>
                <li>ACH Batch</li>
                <li>ACH Reject</li>
                <li>Payment Processed</li>
                <li>CC Chargeback</li>
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

