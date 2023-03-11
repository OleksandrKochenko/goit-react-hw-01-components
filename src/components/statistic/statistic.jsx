import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './statistic.module.css';

export default function Statistics({ title, stats }) {
    return (
        <section className={clsx(css.statistics)}>
            <h2 className={clsx(css.title)}>{title !== '' && title}</h2>
            <ul className={clsx(css.stat_list)}>
                {stats.map(
                        el => {
                            return (
                                <li className={clsx(css.item)} key={el.id}>
                                    <span className={clsx(css.label)}>{el.label}</span>
                                    <span className={clsx(css.percentage)}>{el.percentage}</span>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};