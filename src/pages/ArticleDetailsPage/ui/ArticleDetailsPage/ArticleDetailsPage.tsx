import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import Text from "shared/ui/Text/Text";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article-detailse");
    const { id } = useParams<{id: string}>();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t("Комментарии")} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
