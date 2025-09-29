import { SectionWrap, List, Card } from "./WithItemSection.styled";
import { type Product } from "./data";
import { currency } from "./data";

/** 함께 착용한 상품: 여러 개 카드 렌더 */
export default function WithItemSection({ items }: { items: Product[] }) {
  if (!items?.length) return null;

  return (
    <SectionWrap>
      <h3>함께 착용한 상품</h3>
      <List>
        {items.map((item, i) => (
          <Card key={`${item.sku ?? item.name}-${i}`}>
            <img src={item.img!} alt={item.name} />
            <div className="meta">
              <div className="brand">{item.brand}</div>
              <div className="name">{item.name}</div>
              {typeof item.price === "number" && (
                <div className="price">₩ {currency(item.price)}원</div>
              )}
            </div>
          </Card>
        ))}
      </List>
    </SectionWrap>
  );
}
