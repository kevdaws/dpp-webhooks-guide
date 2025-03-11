"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Steps } from "@/components/steps"
import { WebhookEventSelector } from "@/components/webhook-event-selector"

export function WebhookGuide() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-6xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">DPP Webhooks Guide</h1>
          <p className="text-muted-foreground">Learn how to set up webhooks and use them with Deluxe.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What are Webhooks?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              A webhook is a trigger-based HTTP endpoint configured to receive HTTP POST requests through events.
            </p>
            
            <p>
              When an event happens on DPP (such as a merchant being boarded or transaction being processed), a webhook
              can send this information to your app so that you can take appropriate action.
            </p>

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Set Up Webhooks</CardTitle>
            <CardDescription>Follow these steps to configure webhooks in your Deluxe dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <Steps />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Webhook Events & Payloads</CardTitle>
            <CardDescription>
              Select an event type to see the example JSON payload that will be sent to your webhook endpoint.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <WebhookEventSelector />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Testing webhooks in your environment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
            We recommend utilizing the "Transaction" webhook for testing a simple interaction between DPP and your environment.
            </p>

            <p>
            Note: In order to test Merchant Boarded events, please contact your account representative to setup your production logins, as well as more information on the boarding process.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

