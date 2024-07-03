import { Menu, XIcon } from "lucide-react";
import { Button } from "~/components/park/ui/button";
import * as Drawer from "~/components/park/ui/drawer";
import { IconButton } from "~/components/park/ui/icon-button";

export function MainSideDrawer(props: Drawer.RootProps){
  return (
    <Drawer.Root {...props}>
      <Drawer.Trigger asChild>
        <Button><Menu/></Button>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Description>Description</Drawer.Description>
            <Drawer.CloseTrigger asChild  >
              <IconButton variant="ghost">
                <XIcon />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>{/* Content */}</Drawer.Body>
          <Drawer.Footer >
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.CloseTrigger>
            <Button>Primary</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};
