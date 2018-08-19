//Custom UI Setup:
var snk=0;
var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var Runnable = java.lang.Runnable;
var LinearLayout = android.widget.LinearLayout;
var Button = android.widget.Button;
var View = android.view.View;
var PopupWindow = android.widget.PopupWindow;
var RelativeLayout = android.widget.RelativeLayout;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;


    ctx.runOnUiThread(new Runnable({ run: function(){
        try {
            var layout = new LinearLayout(ctx);
            layout.setOrientation(0);

            var airsneak_btn = new Button(ctx);
            airsneak_btn.setText("(•)");
          airsneak_btn.setWidth(15); airsneak_btn.setBackgroundDrawable(new ColorDrawable(Color.BLUE));
          var asp = new android.widget.LinearLayout.LayoutParams(50,75);
           airsneak_btn.setLayoutParams(asp); airsneak_btn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    if (snk == 0) {
                    return snk =1; } else {
                    return snk=0;}
                }
            }));
            
            layout.addView(airsneak_btn);
var mousewheel_btn = new Button(ctx);
mousewheel_btn.setWidth(15); mousewheel_btn.setBackgroundDrawable(new ColorDrawable(Color.GREEN));
           var mwp = new android.widget.LinearLayout.LayoutParams(50,75);
           mousewheel_btn.setLayoutParams(mwp); mousewheel_btn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                var gm = Level.getGameMode();
                if(gm==1) {
                    //onclick
                    var pb = Player.getPointedBlockId();
                    var data = Player.getPointedBlockData();
                    addItemInventory(pb,1,data);
                    } else {
                    ModPE.showTipMessage('>>Creative<<');
                    }
                    }
            }));
            layout.addView(mousewheel_btn);
            //more button
            var offhand_btn = new Button(ctx);
offhand_btn.setWidth(15); offhand_btn.setBackgroundDrawable(new ColorDrawable(Color.RED));
           var mwp = new android.widget.LinearLayout.LayoutParams(50,75);
           offhand_btn.setLayoutParams(mwp); offhand_btn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    //onclick
var newI = Player.getCarriedItem();
var newC =Player.getCarriedItemCount();
var newD = Player.getCarriedItemData();
var oldI = Entity.getOffhandSlot(Player.getEntity());
var oldC = Entity.getOffhandSlotCount(Player.getEntity());
var oldD = Entity.getOffhandSlotData(Player.getEntity()); Entity.setOffhandSlot(Player.getEntity(),newI,newC,newD);
                  var s = Player.getSelectedSlotId();
                  Player.setInventorySlot(s,0,0,0); addItemInventory(oldI,oldC,oldD);
                    }
            }));
            layout.addView(offhand_btn);
           //gui
            GUI = PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, 50);
            GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
        } catch(err) {
            print("An error occured: " + err);
        }
    }}));

function modTick() {
if (snk==1) {
Entity.setSneaking(Player.getEntity(),true);
}
}
