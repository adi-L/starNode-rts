
import {  doublePI, scene } from '../store/store';

export function renderBullets2(ctx) {
    const _scene = scene.get();
    Array.from(_scene.clans).forEach(clan => {
        Array.from(clan.units).forEach((unit, index) => {
            const bullets = unit.weapon.bullets;
            var i = bullets.length - 1;

            for (i; i > -1; --i) {
                var b = bullets[i];

                ctx.beginPath();
                ctx.strokeStyle = b.color;

                ctx.arc(b.pos.getX() >> 0, b.pos.getY() >> 0, b.radius, 0, doublePI);
                if (Math.random() > 0.4) ctx.stroke();
                ctx.closePath();
            }
        });
    });
}
