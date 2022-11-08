import { BreadcrumbProps } from './breadcrumb.props'
import { Content, Text, Chevron, Ol, Li } from './breadcrumb.styles'

export const Breadcrumb = ({ categories }: BreadcrumbProps) => {
  const isLast = (key) => key === categories.length - 1

  return (
    <Content>
      <nav>
        <Ol>
          {Boolean(categories?.length) &&
            categories.reverse().map((category, key) => {
              return (
                <Li key={`${category.id}`}>
                  <Text bold={isLast(key)}>
                    {category.name}
                    {!isLast(key) && <Chevron>{`>`}</Chevron>}
                  </Text>
                </Li>
              )
            })}
        </Ol>
      </nav>
    </Content>
  )
}
