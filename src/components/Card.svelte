<script lang="ts">
  import Card, { Content, Media, Actions, ActionButtons } from '@smui/card';
  import Button, { Label } from '@smui/button';
  export let mainText: string;
  export let subText: string;
  export let action: () => void;
  export let actionLabel: string;
</script>

<div class="card-display">
  <div class="card-container">
    <Card variant="outlined" padded>
      <Content class="mdc-typography--body2">
        <h2 class="mdc-typography--headline6" style="margin: 0;">
          {mainText}
        </h2>
        {subText}
      </Content>
      <Actions>
        <ActionButtons>
          <Button on:click={action}>
            <Label>{actionLabel}</Label>
          </Button>
        </ActionButtons>
      </Actions>
    </Card>
  </div>
</div>
