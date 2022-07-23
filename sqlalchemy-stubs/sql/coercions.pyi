from types import ModuleType
from typing import Any
from typing import Iterable
from typing import Iterator
from typing import Optional
from typing import Tuple

from . import roles

elements: ModuleType
lambdas: ModuleType
schema: ModuleType
selectable: ModuleType
sqltypes: ModuleType
traversals: ModuleType

def expect(
    role: Any,
    element: Any,
    apply_propagate_attrs: Optional[Any] = ...,
    argname: Optional[Any] = ...,
    **kw: Any,
) -> Any: ...
def expect_as_key(role: Any, element: Any, **kw: Any) -> Any: ...
def expect_col_expression_collection(
    role: Any, expressions: Iterable[Any]
) -> Iterator[Tuple[Any, Any, str, Any]]: ...

class RoleImpl:
    name: str = ...
    def __init__(self, role_class: Any) -> None: ...

class _Deannotate: ...
class _StringOnly: ...
class _ReturnsStringKey: ...
class _ColumnCoercions: ...
class _NoTextCoercion: ...
class _CoerceLiterals: ...
class LiteralValueImpl(RoleImpl): ...
class _SelectIsNotFrom: ...
class HasCacheKeyImpl(RoleImpl): ...
class ExpressionElementImpl(_ColumnCoercions, RoleImpl): ...
class BinaryElementImpl(ExpressionElementImpl, RoleImpl): ...
class InElementImpl(RoleImpl): ...
class OnClauseImpl(_CoerceLiterals, _ColumnCoercions, RoleImpl): ...
class WhereHavingImpl(_CoerceLiterals, _ColumnCoercions, RoleImpl): ...
class StatementOptionImpl(_CoerceLiterals, RoleImpl): ...
class ColumnArgumentImpl(_NoTextCoercion, RoleImpl): ...
class ColumnArgumentOrKeyImpl(_ReturnsStringKey, RoleImpl): ...
class StrAsPlainColumnImpl(_CoerceLiterals, RoleImpl): ...
class ByOfImpl(
    _CoerceLiterals, _ColumnCoercions, RoleImpl, roles.ByOfRole
): ...
class OrderByImpl(ByOfImpl, RoleImpl): ...
class GroupByImpl(ByOfImpl, RoleImpl): ...
class DMLColumnImpl(_ReturnsStringKey, RoleImpl): ...
class ConstExprImpl(RoleImpl): ...
class TruncatedLabelImpl(_StringOnly, RoleImpl): ...
class DDLExpressionImpl(_Deannotate, _CoerceLiterals, RoleImpl): ...
class DDLConstraintColumnImpl(_Deannotate, _ReturnsStringKey, RoleImpl): ...
class DDLReferredColumnImpl(DDLConstraintColumnImpl): ...
class LimitOffsetImpl(RoleImpl): ...
class LabeledColumnExprImpl(ExpressionElementImpl): ...
class ColumnsClauseImpl(_SelectIsNotFrom, _CoerceLiterals, RoleImpl): ...
class ReturnsRowsImpl(RoleImpl): ...
class StatementImpl(_NoTextCoercion, RoleImpl): ...
class CoerceTextStatementImpl(_CoerceLiterals, RoleImpl): ...
class SelectStatementImpl(_NoTextCoercion, RoleImpl): ...
class HasCTEImpl(ReturnsRowsImpl): ...
class JoinTargetImpl(RoleImpl): ...
class FromClauseImpl(_SelectIsNotFrom, _NoTextCoercion, RoleImpl): ...
class StrictFromClauseImpl(FromClauseImpl): ...
class AnonymizedFromClauseImpl(StrictFromClauseImpl): ...
class DMLTableImpl(_SelectIsNotFrom, _NoTextCoercion, RoleImpl): ...
class DMLSelectImpl(_NoTextCoercion, RoleImpl): ...
class CompoundElementImpl(_NoTextCoercion, RoleImpl): ...